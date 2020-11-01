import Head from 'next/head';

const analytics = process.env.NODE_ENV === 'development' ? null : (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-12209334-1"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-12209334-1');`
    }}/>
  </>
)

export default function Home() {
  return (
    <div>
      <Head>
        { analytics }
        <title>Turkey Leek and Stilton Soup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Turkey Leek and Stilton Soup</h1>

        <ol>
          <li>Acquire as much leftover sliced turkey as physically possible.</li>
          <li>For <em>each</em> 325g (11oz) of turkey you will need:
            <ul>
              <li>4 tbsp butter</li>
              <li>1 large onion, chopped</li>
              <li>1 leek leek, trimmed and sliced</li>
              <li>600ml (1pt) chicken stock</li>
              <li>150g (5.5oz) Stilton</li>
              <li>150ml (5fl oz) double cream</li>
              <li>1 tbsp chopped fresh tarragon</li>
            </ul>
          </li>
          <li>Melt the butter in a large pan and cook the onion for 4 mins until slightly softened</li>
          <li>Add the leek and cook for a further 3 mins</li>
          <li>Add the stock and turkey and bring to the boil, then reduce the heat and simmer for 15 mins</li>
          <li>Remove from the heat and leave to cool</li>
          <li>Blend coarsely with a stick blender (or remove half and blend in a food processor and return to the pan</li>
          <li>Add the Stilton, cream and tarragon, season to taste and reheat gently</li>
          <li>Serve garnished with tarragon leaves and croutons</li>
        </ol>
      </main>
    </div>
  )
}
