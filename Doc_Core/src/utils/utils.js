
export function createImageArray(...args) {
    let images = [];
    let x = 0;
    for(let arg of args) {
        let imageObject = {id: x, url: arg}
        images.push(imageObject);
        x++;
    }
    return images;
}

export function createCaptionArray(...args) {
    let captions = [];
    let x = 0;
    for(let arg of args) {
        let captionObject = {id: x, caption: arg}
        captions.push(captionObject);
        x++;
    }
    return captions;
}