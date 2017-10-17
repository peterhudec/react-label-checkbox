import React, { Component } from 'react'
import Checkbox from './Checkbox'
import Label from './Label'

// Themed checkbox
const Facebox = props =>
  <Checkbox {...props}
    skinChecked={<em>&#x1F601;&nbsp;</em>}
    skinUnchecked={<em>&#x1F622;&nbsp;</em>}/>

export default () =>
  <div style={{textAlign: 'center'}}>
    <h1>React Checkbox and Label Components</h1>
    <p>
      This is a demonstration of a React alternative to the native
      checkbox and label elements. Both <code>Checkbox</code> and
      <code>Label</code> mimick the interface of their native counterparts.
      The only exception is the <code>onChange()</code> event, whose
      callback receives a single boolean argument denoting the status
      of the checkbox.
    </p>

    <h2>Custom Skin</h2>
    <p>You can customize the checkbox appearance.</p>
    <Label id="label-1">
      <Checkbox/>
      default React checkbox
    </Label>
    <br/>
    <Label id="label-2">
      <Facebox/>
      React checkbox with custom skin (facebox)
    </Label>
    <br/>
    <label>
      <input type="checkbox"/>
      native checkbox
    </label>

    <h2>Checked By Default</h2>
    <Label id="label-3">
      <Checkbox checked/>
      React checkbox
    </Label>
    <br/>
    <br/>
    <label>
      <input checked type="checkbox"/>
      native checkbox
    </label>

    <h2>Wrapped By Label</h2>
    <p>
      Only the first checkbox inside a label should be triggered
      by clicking on the label.
    </p>
    <Label id="label-4">
      <Checkbox/>
      <Checkbox/>
      <Checkbox/>
      React checkbox
    </Label>
    <br/>
    <label>
      <input type="checkbox"/>
      <input type="checkbox"/>
      <input type="checkbox"/>
      native checkbox
    </label>

    <h2>Linked With Label By ID Inside</h2>
    <p>
      Only the first checkbox linked with a label by ID should be triggered
      by clicking on the label.
    </p>
    <Label htmlFor="linked-inside-react" id="label-5">
      <Checkbox/>
      <Checkbox id="linked-inside-react"/>
      <Checkbox id="linked-inside-react"/>
      click me to toggle the React checkbox in the middle
    </Label>
    <br/>
    <label htmlFor="linked-inside-native" >
      <input type="checkbox"/>
      <input id="linked-inside-native" type="checkbox"/>
      <input id="linked-inside-native" type="checkbox"/>
      click me to toggle the native checkbox in the middle
    </label>

    <h2>Linked With Label By ID Outside</h2>
    <p>
      Only the first checkbox linked with a label by ID should be triggered
      by clicking on the label.
    </p>
    <Checkbox id="linked-outside-react"/>
    <Checkbox id="linked-outside-react"/>
    <Label htmlFor="linked-outside-react" id="label-6">
      click me to toggle the first React checkbox
    </Label>
    <br/>
    <input id="linked-outside-native" type="checkbox"/>
    <input id="linked-outside-native" type="checkbox"/>
    <label htmlFor="linked-outside-native" >
      click me to toggle the first native checkbox
    </label>
  </div>
