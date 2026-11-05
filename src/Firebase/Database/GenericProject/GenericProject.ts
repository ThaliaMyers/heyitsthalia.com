// id: UUID
// index: int
// date: timestamp
//
// title: string
// subtitle: string
// description: string
// tags: [string]
//
// subpagePath: string
// urlPath: string
//
// creationDate: timestamp
// modifiedDate: timestamp

/**
 * The universal data type for all projects and post-style data across the website.
 * This includes all projects, interest categories, photo albums, and most other simple data.
 * The data is consolidated to this one type for better search integration. 
 * It also simplifies the database fetching code.
 * */
export interface GenericProject {
    /**
     * Unique ID for the project.
     * */
    id?: string;
    /**
     * Index of the project used for sorting when no other sorting fields are available.
     * */
    index: number;
    /**
     * User-facing title of the project post.
     * */
    title: string;
    /**
     * User-facing subtitle of the project post.
     * */
    subtitle: string;
    // TODO: Potentially add Markdown support for this field including embedded Firebase images.
    /**
     * User-facing description of project.
     * */
    description: string;
    /**
     * The location of a cover image to the project data. May not be present.
     * */
    coverImage?: string;
    /**
     * Unique ID for the category. Used for custom grouping including interests, photography albums, etc.
     * Required because all project components use the same data type.
     * */
    categoryId: string;
    /**
     * The URL to a photo album. Optional field for photography album category.
     * */
    albumUrl?: string;
    /**
     * The URL path of the page.
     * */
    subpagePath: string;
    /**
     * A list of searchable relevant tags to the project.
     * */
    tags: string[];
    /**
     * The date the project itself was completed.
     */
    completedDate: Date;
    /**
     * The date the project post was created on the website.
     * */
    createdDate: Date;
    /**
     * The last date the project post was modified.
     * */
    modifiedDate: Date;
}