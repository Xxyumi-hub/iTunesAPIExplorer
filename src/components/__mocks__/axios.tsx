const mockResponse = {
  data: {
    results: [{
      artistName: 'Me',
      collectionName: 'Best hits',
      releaseDate: 1990,
      artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/5c/53/49/5c534904-c87a-f689-a343-ea80119d3947/source/100x100bb.jpg'
    }]
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}
