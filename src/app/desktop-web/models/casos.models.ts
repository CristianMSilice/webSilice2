export interface Casos {
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
    better_featured_image: BetterFeaturedImage;
    acf:                   Acf;
    _links:                Links;
}

interface Links {
    self:               About[];
    collection:         About[];
    about:              About[];
    "wp:featuredmedia": WpFeaturedmedia[];
    "wp:attachment":    About[];
    curies:             Cury[];
}

interface About {
    href: string;
}

interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

interface WpFeaturedmedia {
    embeddable: boolean;
    href:       string;
}

interface Acf {
    avatar_casos: AvatarCasos;
    enlace_casos: EnlaceCasos;
}

interface AvatarCasos {
    ID:          number;
    id:          number;
    title:       string;
    filename:    string;
    filesize:    number;
    url:         string;
    link:        string;
    alt:         string;
    author:      string;
    description: string;
    caption:     string;
    name:        string;
    status:      string;
    uploaded_to: number;
    date:        Date;
    modified:    Date;
    menu_order:  number;
    mime_type:   string;
    type:        string;
    subtype:     string;
    icon:        string;
    width:       number;
    height:      number;
    sizes:       AvatarCasosSizes;
}

interface AvatarCasosSizes {
    thumbnail:               string;
    "thumbnail-width":       number;
    "thumbnail-height":      number;
    medium:                  string;
    "medium-width":          number;
    "medium-height":         number;
    medium_large:            string;
    "medium_large-width":    number;
    "medium_large-height":   number;
    large:                   string;
    "large-width":           number;
    "large-height":          number;
    "1536x1536":             string;
    "1536x1536-width":       number;
    "1536x1536-height":      number;
    "2048x2048":             string;
    "2048x2048-width":       number;
    "2048x2048-height":      number;
    "post-thumbnail":        string;
    "post-thumbnail-width":  number;
    "post-thumbnail-height": number;
}

interface EnlaceCasos {
    title:  string;
    url:    string;
    target: string;
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
    sizes:      MediaDetailsSizes;
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

interface MediaDetailsSizes {
    medium:    Medium;
    thumbnail: Medium;
}

interface Medium {
    file:        string;
    width:       number;
    height:      number;
    "mime-type": MIMEType;
    source_url:  string;
}

enum MIMEType {
    ImageJPEG = "image/jpeg",
}

interface Content {
    rendered:  string;
    protected: boolean;
}

interface GUID {
    rendered: string;
}
