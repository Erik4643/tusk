import { Audio } from 'react-loader-spinner'

export const Loading = () => (
  // TODO: all data had to pass through the props, but time is short
  <Audio
    height="100"
    width="100"
    color="black"
    ariaLabel="loading"
  />
)
