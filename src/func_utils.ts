export default function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

export function removeTrailingOblique( path )
{
    let ch = path[path.length-1];

    if( ch === '/')
        path = path.substring(0, path.length-1);

    return path;
}

