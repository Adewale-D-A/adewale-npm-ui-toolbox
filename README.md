# Custom NPM packages for reusable and useful UI components

## Version - V1.1.1

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

```

    <div
      className={classnames?.parentContainer || "default-parent-container-class-name"}
      >
        <div
          className={
            classnames?.childContainer ||"default-child-container-class-name"
          }
          >
            <img
              className={classnames?.image || "default-image-class-name"}
              />
            <span className={classnames?.text || default-text-class-name"}></span>
            <button
              className={classnames?.binButton || "default-delete-button-class-name"}
              title="delete item"
            >
              <BinIcon className={classnames?.binIcon || "defualt-delete-icon-class-name"} />
            </button>
            <button
              className={
                classnames?.binButton || "default-delete-button-class-name"
              }
              title="toggle input field display"
            >
              <InputFieldIcon
                className={`${classnames?.inputIcon || "default-input-icon-class-name"} ${
                   classnames?.enableInputIcon
                }`}
            </button>
            <textarea
              rows={inputConfigration?.rows || 1}
              className={classnames?.input || "defualt-input-field-class-name"}
            />
        </div>
    </div>

```

### Calendar-view

<a href="https://www.adewaleda.com/npm-packages/adewale-ui-toolbox" target="_blank">DEMO</a>

## What is new?

> > Added drag to reorder component with the characteristics to enable input fields, allow images or just text with purely customizable CSS functionality or default CSS
