
/**
 * Creates immutable component props.
 * 
 * @param {object} props
 * @returns {object}
 */
export function createProps(props = {}) {
    return Object.freeze({
        ...props,
    })
}