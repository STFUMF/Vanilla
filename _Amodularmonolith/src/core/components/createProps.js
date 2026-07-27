/**
 * Creates immutable component props.
 *
 * @param {object} props
 * @returns {object}
 */
const EMPTY_CHILDREN = Object.freeze([]);
const EMPTY_PROPS = Object.freeze({});

export function createProps(props = EMPTY_PROPS) {
  const { children = EMPTY_CHILDREN, ...rest } = props;

  return Object.freeze({
    ...rest,
    children,
  });
}
