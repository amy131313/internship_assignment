import clampNumber from 'utils/clampNumebr'

const mapNumber = (input, inFrom, inTo, outFrom, outTo, ease = t => t) => {
    const clampedInput =
        inFrom < inTo
            ? clampNumber(input, inFrom, inTo)
            : clampNumber(input, inTo, inFrom)
    const inDiff = inTo - inFrom
    const outDiff = outTo - outFrom
    return ease((clampedInput - inFrom) / inDiff) * outDiff + outFrom
}



export default mapNumber
