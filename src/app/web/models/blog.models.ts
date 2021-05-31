export interface Blog {
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
    author:                number;
    featured_media:        number;
    comment_status:        string;
    ping_status:           string;
    sticky:                boolean;
    template:              string;
    format:                string;
    meta:                  any[];
    categories:            number[];
    tags:                  any[];
    better_featured_image: BetterFeaturedImage;
    acf:                   Acf;
    _links:                Links;
}

interface Links {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    author:                Author[];
    replies:               Author[];
    "version-history":     VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:featuredmedia":    Author[];
    "wp:attachment":       About[];
    "wp:term":             WpTerm[];
    curies:                Cury[];
}

interface About {
    href: string;
}

interface Author {
    embeddable: boolean;
    href:       string;
}

interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

interface PredecessorVersion {
    id:   number;
    href: string;
}

interface VersionHistory {
    count: number;
    href:  string;
}

interface WpTerm {
    taxonomy:   string;
    embeddable: boolean;
    href:       string;
}

interface Acf {
    relacion: Relacion[];
}

interface Relacion {
    ID:                    number;
    post_author:           string;
    post_date:             Date;
    post_date_gmt:         Date;
    post_content:          string;
    post_title:            string;
    post_excerpt:          string;
    post_status:           string;
    comment_status:        string;
    ping_status:           string;
    post_password:         string;
    post_name:             string;
    to_ping:               string;
    pinged:                string;
    post_modified:         Date;
    post_modified_gmt:     Date;
    post_content_filtered: string;
    post_parent:           number;
    guid:                  string;
    menu_order:            number;
    post_type:             string;
    post_mime_type:        string;
    comment_count:         string;
    filter:                string;
}

interface BetterFeaturedImage {
    id:            number;
    alt_text:      string;
    caption:       string;
    description:   string;
    media_type:    string;
    media_details: MediaDetails;
    post:          number;
    source_url:    string;
}

interface MediaDetails {
    width:      number;
    height:     number;
    file:       string;
    sizes:      Sizes;
    image_meta: ImageMeta;
}

interface ImageMeta {
    aperture:          string;
    credit:            string;
    camera:            string;
    caption:           string;
    created_timestamp: string;
    copyright:         string;
    focal_length:      string;
    iso:               string;
    shutter_speed:     string;
    title:             string;
    orientation:       string;
    keywords:          any[];
}

interface Sizes {
    medium:           The1536_X1536;
    large:            The1536_X1536;
    thumbnail:        The1536_X1536;
    medium_large:     The1536_X1536;
    "1536x1536":      The1536_X1536;
    "post-thumbnail": The1536_X1536;
}

interface The1536_X1536 {
    file:        string;
    width:       number;
    height:      number;
    "mime-type": string;
    source_url:  string;
}

interface Content {
    rendered:  string;
    protected: boolean;
}

interface GUID {
    rendered: string;
}
