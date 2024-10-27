# Custom NPM packages for reusable and useful UI components

## Version - V1.1.6

## DOCUMENTATION

### [DEMO](https://www.adewaleda.com/npm-packages/adewale-ui-toolbox) Drag-to-reorder

```

import {DragToReOrder} from "adewale-ui-toolbox";

export default function DragComponent() {
  const [dataset, setDataset] = useState<
    { id: string; image?: string; text?: string; inputFieldText?: string }[]
  >([
    { id: "rand-1", image: "https://placehold.co/40x40/0fb/fff?text=1" },
    { id: "rand-2", image: "https://placehold.co/40x40/0fb/fff?text=2" },
    { id: "rand-3", image: "https://placehold.co/40x40/0fb/fff?text=3" },
    { id: "rand-4", image: "https://placehold.co/40x40/0fb/fff?text=4" },
    { id: "rand-5", image: "https://placehold.co/40x40/0fb/fff?text=5" },
    {
      id: "rand-6",
      image: "https://placehold.co/40x40/0fb/fff?text=6",
    },
  ]);
  return (
      <DragToReOrder
        data={dataset}
        setData={setDataset}
        allowDelete={true}
        inputConfigration={{
          allowField: true,
          rows: 2,
        }}
      />
  );
}
```

#### Props

 <table>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Explanation</th>
    </tr>
    <tr>
      <td>data</td>
      <td>data: {id: string, image?: string, text?: string, inputFieldText?: string, showInoutField?: boolean}</td>
      <td>`id` is expexted to be unique and compulsory. other fields are optional</td>
    </tr>
    <tr>
      <td>setData</td>
      <td>Function i.e. setState</td>
      <td>State object manipulation</td>
    </tr>
    <tr>
      <td>classnames</td>
      <td>{
    parentContainer?: string;
    childContainer?: string;
    image?: string;
    text?: string;
    binButton?: string;
    binIcon?: string;
    input?: string;
    inputIcon?: string;
    enableInputIcon?: string;
  }</td>
      <td>Class names for all HTML tags used in the  component for more customizable experience, see below table to get more understanding of HTML tags hierarchy</td>
    </tr>
    <tr>
      <td>allowDelete</td>
      <td>boolean</td>
      <td>Shows delete button icon which enables item deletion</td>
    </tr>
    <tr>
      <td>inputConfigration</td>
      <td>{
    allowField?: boolean;
    rows?: number;
  }</td>
      <td> Optional configuration for input field</td>
    </tr>
    </table>

#### classnames Props Hierarchy

```

    <div className={classnames?.parentContainer} ...>
        <div className={classnames?.childContainer} ... >
            <img className={classnames?.image} .../>
            <span className={classnames?.text}></span>
            <button className={classnames?.binButton} ... >
              <BinIcon className={classnames?.binIcon} />
            </button>
            <button className={ classnames?.binButton} ...
              <InputFieldIcon className={`${classnames?.inputIcon} ${classnames?.enableInputIcon}`}
            </button>
            <textarea
              rows={inputConfigration?.rows || 1}
              className={classnames?.input }
            />
        </div>
    </div>

```

### Calendar-view

<a href="https://www.adewaleda.com/npm-packages/adewale-ui-toolbox" target="_blank">DEMO</a>

### [DEMO](https://www.adewaleda.com/npm-packages/adewale-ui-toolbox) Image Carousel

```

import {ImageCarousel} from "adewale-ui-toolbox";

export default function DragComponent() {
  const images = [
    {
      url: "https://...",
      child: <CarouselContent />,
    },
    {
      url: "https://...",
    },
    {
      url: "https://...",
    },
  ];
  return (
      <ImageCarousel
        images={images?.map((item) => ({
          url: item?.url,
          child: item?.child,
        }))}
          autoTransitionOptions={{ allow: true, seconds: 8 }}
      />
  );
}
function CarouselContent() {
  return (
    <div className="">
      <h6>Latest News & Updates</h6>
      <p>
        Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis
        aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat
        fringilla tincidunt quisque non. Pellentesque in ut tellus.
      </p>
    </div>
  );
}

```

## What is new?

> > 27.10.24 - Image carousel hover animation stop
> > 21.10.24 - Image carousel auto scroll (optional feature)
> > 20.10.24 - Image carousel ui component added

> > 19.10.224 - Added drag to reorder component with the characteristics to enable input fields, allow images or just text with purely customizable CSS functionality or default CSS
