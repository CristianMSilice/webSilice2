export interface Trayectoria {
    id:                    number;
    date:                  Date;
    date_gmt:              Date;
    guid:                  GUID;
    modified:              Date;
    modified_gmt:          Date;
    slug:                  string;
    status:                Status;
    type:                  Type;
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
    name:      Name;
    href:      Href;
    templated: boolean;
}

enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

enum Name {
    Wp = "wp",
}

interface Content {
    rendered:  string;
    protected: boolean;
}

interface GUID {
    rendered: string;
}

enum Status {
    Publish = "publish",
}

enum Type {
    Trayectoria = "trayectoria",
}
