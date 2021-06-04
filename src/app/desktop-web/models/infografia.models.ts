export interface Infografia {
    id:                    number;
    date:                  Date;
    date_gmt:              Date;
    guid:                  GUID;
    modified:              Date;
    modified_gmt:          Date;
    slug:                  string;
    status:                string;
    type:                  string;
    link:                  string;
    title:                 GUID;
    content:               Content;
    excerpt:               Content;
    featured_media:        number;
    template:              string;
    better_featured_image: null;
    acf:                   any[];
    _links:                Links;
}

interface Links {
    self:            About[];
    collection:      About[];
    about:           About[];
    "wp:attachment": About[];
    curies:          Cury[];
}

interface About {
    href: string;
}

interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

interface Content {
    rendered:  string;
    protected: boolean;
}

interface GUID {
    rendered: string;
}
