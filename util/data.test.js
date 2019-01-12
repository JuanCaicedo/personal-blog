import { getUrl } from './data'

describe('getUrl', () => {
  it('works for production server side', () => {
    expect(
      getUrl(
        { NODE_ENV: 'production', API_PROTOCOL: 'protocol', API_PORT: ':port' },
        { headers: { host: 'host' } }
      )
    ).toEqual('protocol://host:port/api/blog')
  })

  it('works for production client side', () => {
    expect(
      getUrl(
        { NODE_ENV: 'production', API_PROTOCOL: 'protocol', API_PORT: '' },
        undefined,
        'https://href.now.sh/blog'
      )
    ).toEqual('protocol://href.now.sh/api/blog')
  })

  it('works for development server side', () => {
    expect(
      getUrl(
        {
          NODE_ENV: 'development',
          API_PROTOCOL: 'protocol',
          API_PORT: ':port'
        },
        { headers: { host: 'host' } }
      )
    ).toEqual('protocol://host:port')
  })

  it('works for development client side', () => {
    expect(
      getUrl(
        {
          NODE_ENV: 'development',
          API_PROTOCOL: 'protocol',
          API_PORT: ':7000'
        },
        undefined,
        'https://localhost:2000/blog'
      )
    ).toEqual('protocol://localhost:7000')
  })
})
