export interface PhotoAlbum {
    id?: string;
    title: string;
    description: string;
    albumUrl: string;
    
    tags: string[];
    
    dateTaken: Date;
    creationDate: Date;
    modifiedDate: Date;
}