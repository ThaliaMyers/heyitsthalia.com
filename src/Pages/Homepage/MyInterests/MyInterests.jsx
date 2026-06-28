import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.js';
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
            const snapshot = await getDocs(collection(db, 'Interests Categories'));
            const docs = snapshot.docs.map(doc => doc.data());

            const grouped = {};
            docs.forEach(item => {
                if (!grouped[item.category]) grouped[item.category] = [];
                grouped[item.category].push(item);
            });

            Object.values(grouped).forEach(items => items.sort((a, b) => a.index - b.index));

            const orderedCategories = CATEGORY_ORDER.filter(cat => grouped[cat]);
            const remainingCategories = Object.keys(grouped).filter(cat => !CATEGORY_ORDER.includes(cat));

            setGroupedInterests(
                [...orderedCategories, ...remainingCategories].map(cat => ({
                    category: cat,
                    items: grouped[cat],
                }))
            );
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
                                <div className="interestCardContent">
                                    {/*Interests Card Title*/}
                                    <h4>{item.title}</h4>

                                    {/*Interests Card Tags*/}
                                    {item.tags?.length > 0 && (
                                        <div className='interestTags'>
                                            {item.tags.map(tag => (
                                                <span key={tag} className='interestTag'>{tag}</span>
                                            ))}
                                        </div>
                                    )}

                                    {/*Interests Card Description*/}
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
