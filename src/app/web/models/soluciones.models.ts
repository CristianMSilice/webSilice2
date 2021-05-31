export interface Soluciones {
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
    enlace_soluciones: EnlaceSolucionesClass | string;
}

interface EnlaceSolucionesClass {
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
    medium:       The1536_X1536;
    large:        The1536_X1536;
    thumbnail:    The1536_X1536;
    medium_large: The1536_X1536;
    "1536x1536":  The1536_X1536;
}

interface The1536_X1536 {
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
