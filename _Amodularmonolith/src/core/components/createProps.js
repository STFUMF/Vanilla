
/**
 * Creates immutable component props.
 * 
 * @param {object} props
 * @returns {object}
 */
export function createProps(props = {}) {
    const {
        children = [],
        ...rest
    } = props;

    return Object.freeze({
        ...rest,
        children: Object.freeze([...children]),
    });
}