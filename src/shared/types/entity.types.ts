export interface Entity {
    uniqueId: string;
    groupIds: string[];
    title: string;
    description?: string | null;
}

export class EntitySource {
    uniqueId: string;
    groupIds: string[];
    title: string;
    description?: string | null;

    constructor(uniqueId: string, groupIds: string[], title: string, description?: string | null) {
        this.uniqueId = uniqueId;
        this.groupIds = groupIds;
        this.title = title;
        this.description = description;
    }
}

export interface EntityDictionary {
    [key: string]: Entity;
}

export interface EntityDto {
    uniqueId: string;
    groupId: string;
}