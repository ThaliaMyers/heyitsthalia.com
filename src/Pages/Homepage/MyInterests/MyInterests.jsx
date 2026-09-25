import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../../firebase.js';
import { ref, getDownloadURL } from "firebase/storage";
import GradientTextHeader from "../../../Components/TextComponents/GradientTextHeader.jsx";
import './MyInterests.css';

const CATEGORY_ORDER = [
    "Design and Development",
    "Photography",
    "Other Technology"
];

export default function MyInterests() {
    const [groupedInterests, setGroupedInterests] = useState([]);

    useEffect(() => {
        async function fetchInterests() {
            try {
                const snapshot = await getDocs(collection(db, 'Interests Categories'))
                const allDocs = snapshot.docs;

                // Fetch the urls for all images from Firebase
                const imageUrls = await Promise.all(
                    allDocs.map(async (doc) => {
                        try {
                            const storagePath = `interests/${doc.id}.png`;
                            const imageRef = ref(storage, storagePath);
                            const url = await getDownloadURL(imageRef);
                            console.log(url);
                            return url;
                        } catch {
                            // Return null for missing images
                            return null;
                        }
                    })
                );

                const mergedData = allDocs.map((doc, i) => ({
                    ...doc.data(),
                    id: doc.id,
                    imageUrl: imageUrls[i]
                }));

                const grouped = {};
                mergedData.forEach(item => {
                    const category = item.category;
                    if (!grouped[category]) grouped[category] = [];
                    grouped[category].push(item)
                });

                const orderedCategories = CATEGORY_ORDER.filter(cat => grouped[cat]);
                const groupedInterests = orderedCategories.map(cat => ({
                    category: cat,
                    items: grouped[cat]
                }));

                setGroupedInterests(groupedInterests);
            } catch (e) {
                console.error("Error loading data:", e);
            }
        }

        fetchInterests();
    }, []);

    return (
        <div className='myInterests'>
            <section className='myInterestsHeader'>
                <GradientTextHeader tagType='h2' text='My Interests' textSize='clamp(30px, 5vw, 100px)' />
            </section>
            {groupedInterests.map(({ category, items }) => (
                <section key={category} className='interestsCategory'>
                    <h3 className='interestsSubheaderText'>{category}</h3>
                    <div className='interestsGrid'>
                        {items.map(item => (
                            <div key={item.index} className='interestCard'>
                                {item.imageUrl ? (
                                    <img
                                        src={item.imageUrl}
                                        alt={`${item.title} image`}
                                        style={{ width: '100%' }}
                                        className='interestImage'
                                    />
                                ) : (
                                    <div style={{ backgroundColor: '#eee', height: '100px' }}>No Image</div>
                                )}
                                <div className="interestCardContent">
                                    {/*Interests Card Title*/}
                                    <h4 className="interestCardTitle">{item.title}</h4>

                                    {/*Interests Card Tags*/}
                                    {item.tags?.length > 0 && (
                                        <div className='interestTags'>
                                            {item.tags.map(tag => (
                                                <span key={tag} className='interestTag'>{tag}</span>
                                            ))}
                                        </div>
                                    )}

                                    <br></br>

                                    {/*Interests Card Description*/}
                                    <p className="interestCardDescription">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
