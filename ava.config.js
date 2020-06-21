import unit from './test/unit/ava.config'

const TEST_TYPE = process.env.TEST_TYPE

// eslint-disable-next-line no-undef
export default TEST_TYPE === 'e2e' ? e2e : unit
