// Alt text for images in /public/images/gallery, keyed by filename
const galleryAlt = {
    "18337D50-05D3-4E6A-AC7F-F6E8C33FC773.jpg": "Three men smiling together outside Panevino's storefront window at night",
    "3a872282-9a30-4a24-aa16-18805a2f9f13.jpeg": "Guests gathered around a chocolate cake with lit candles for a birthday",
    "IMG_0803.jpg": "Man posing beside a Napa Valley vineyard welcome sign",
    "IMG_0805.jpg": "Restaurant owner and chef posing together during a holiday dinner service",
    "IMG_3511.JPG": "Five men posing in front of the wine display near the exit",
    "IMG_5712.JPG": "Autographed Michael Bolton 'My Secret Passion' album cover on display",
    "IMG_5716.JPG": "Two couples posing by the gift certificate sign and menu board",
    "IMG_5717.jpg": "Manager and two guests posing near the Italy map display",
    "IMG_5719.JPG": "Two men in red jerseys holding a soccer championship trophy",
    "IMG_8869.jpg": "Autographed photo of PGA golfer Fuzzy Zoeller putting on the green",
    "IMG_8872.jpg": "Group of six friends posing outside Panevino's entrance at night",
    "Sal_and_guests1-705x553.jpg": "Restaurant owner Sal with guests in the holiday-decorated dining room",
    "a7cc3d7e-6aae-4db8-98de-86677824e84f.jpeg": "Family blowing out candles on a chocolate birthday cake at the table",
    "b9f88da0-7bcc-49fc-b525-3e273a7fc0f0.jpeg": "Packed dining room full of guests celebrating a birthday party",
    "cbbc7aa1-09e9-4cbe-8337-1ff6cdb42fb6.jpeg": "Large group of family and friends posing around a table for a celebration",
    "img.png": "Owner Sal with guests posing in the garland-decorated dining room",
    "img_1.png": "Two men posing with a signed Michael Bolton CD near wine bottles",
    "img_2.png": "Dining room at Panevino with white and red tablecloths and blue pendant lights",
    "img_3.png": "Dining room with leather booths, wine bottle display, and star light fixtures",
    "img_4.png": "Friends raising a toast together at a table near the front window",
    "img_7.png": "Naples Daily News clipping reviewing Panevino as a local dining favorite",
    "img_8.png": "Newspaper restaurant review clipping praising Panevino Ristorante's cuisine",
    "img_9.png": "Autographed trading card of NFL Hall of Famer Dante Lavelli",
    "inside1.jpg": "Panevino dining room set with white and red tablecloths and leather booths",
    "inside3.jpg": "Panevino Ristorante's outdoor patio seating with tiki torches at dusk",
    "inside5.jpg": "Dining room decorated for the holidays with a Christmas tree and set tables",
    "inside6.jpg": "Four men posing at a dinner table beneath a mural of angel musicians",
};

export function galleryImageAlt(filename) {
    return galleryAlt[filename] ?? "Panevino Ristorante in North Naples, FL";
}
