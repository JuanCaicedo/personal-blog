---
title: Combining React Hooks
aliases: ["combining react hooks"]
test: me
---

React hooks are one of the most ambitious API changes I've seen in React.

They make writing stateful components easier sure, and they give you some nicer
APIs for working with libraries, like Apollo for fetching data through graphql.

But the real value add of hooks is that they empower you to write your own hooks
to do more complex things.

I learned this through some work I was doing with Apollo's hooks.

Apollo gives you a hook for executing graphql mutations, which might look
something like this.

```js
const {upload, loading, error} = useMutation(UPLOAD_MUTATION)
```

Let's break the return value of `useMutation`.
- `upload` - A function that when called will execute the mutation. That
  function will return a promise, making it easy to interact with the results of
  that mutation.
- `loading` - A boolean flag that represents whether a network request to
  execute the mutation is currently in flight.
- `error` - An object that will represent whether a graphql error ocurred when
  trying to execute the mutation. This is to give the client side a notion of
  when things did not complete successfully so it can update accordingly.

What's the advantage of this? It means that you can write component code that
can handle the many states of running a mutation, waiting for it to finish, and
possibly handling when it fails, all without needing to do much state management
yourself.

### Presigned urls

Rather than uploading our data directly to the graphql API, what we would like
to do is upload that data to a cloud storage, like AWS S3, and then afterwards
tell our API of the location of that data in the cloud.

Often we don't want to have open upload permissions to our storage, that could
probably be a security risk.

The solution I'm most familiar with here is to create a presigned upload url
through our API. The API holds the secrets for interacting with the cloud, and
through a presigned url it gives a client the ability to upload a limited amount
of data to that storage.

Here's what calling a hook that does that might look like:

```js
const {createUploadUrl, loading, error} = useMutation(CREATE_UPLOAD_URL)
```

### Multiple mutations

Now we need to coordinate the actions of these two mutations. Doing so might
look something like this

```jsx
function Uploader() {
  const {createUploadUrl, loading, error} = useMutation(CREATE_UPLOAD_URL)
  const {upload, loading, error} = useMutation(UPLOAD_MUTATION)

  const onClick = async () => {
    const uploadUrl = await createUploadUrl()
    const urlToImage = await saveImage(uploadUrl, image)
    return upload(urlToImage)
  }

  return <button onClick={handleClick}></button>
}
```

### Under construction
I'm still flushing out this page! If you'd like to hear the end of it, let me
know and I can prioritize it.
