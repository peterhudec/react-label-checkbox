# React Checkbox and Label

This is an example of implementation of `Checkbox` and `Label`
components in React. Both have the same interface as their native
counterparts except for the checkbox `onChange` event whose callback
doesn't receive a `MouseEvent` but a boolean value denoting the status
of the checkbox (checked) to which the change resulted.

The markup of both states of the checkbox can be customized with its
`skinChecked` and `skinUnchecked` props.

Both components are accessible. The checkboxe's `aria-checked`
attribute reflects the status of the checkbox, and the label automatically
applies the `aria-labelledby` to the linked checkbox.

To see the demo launch the development server with `npm start`.

No tests, sorry.
