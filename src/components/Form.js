import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * + * {
    margin-top: 1.5rem;
  }
`

const Label = styled.label`
  width: 100%;
  max-width: 20em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex-grow: 1;
  box-sizing: border-box;
  font-weight: 300;
  display: block;
  margin: 0;
  border: none;
  padding: 0.5em 0;
  line-height: 1;
  transition: border-color 0.2s;
  &:focus{
    outline: none;
    + .Icon{
      stroke-dasharray: 28.284, 20;
      stroke-dashoffset: 0;
    }
  }
  &:focus ~ .Line .focus,
  &:valid ~ .Line .valid,
  &[data-touched]:invalid ~ .Line .invalid {
    stroke-dasharray: 40, 0;
    stroke-dashoffset: 0;
  }
`

const Button = styled.input`
  background: none;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  border-radius: 0.25rem;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 12px -4px black;
  }
`

const Icon = styled.svg`
  width: 1rem;
  order: -1;
  transition: all 0.2s;
  stroke-dasharray: 0, 20;
  stroke-dashoffset: -14.142;
  path {
    stroke: black;
    stroke-width: 2px;
    fill: none;
  }
`

const Line = styled.svg`
  width: 100%;
  height: 2px;
  stroke: hsl(0, 0%, 75%);
  stroke-width: 2px;
  margin-left: 1rem;
  .focus,
  .valid,
  .invalid {
    transition: all 0.2s;
    stroke-dasharray: 0, 20;
    stroke-dashoffset: -20;
  }
  .focus {
    stroke: black;
  }
  .valid {
    stroke: hsl(166, 72%, 40%);
  }
  .invalid {
    stroke: hsl(0, 100%, 40%);
  }
`

export default (props) => (
  <Form>
    <Label>
      <Input type='text' placeholder='Username' name='username' required minlength='4' />
      <Icon className='Icon' viewBox='0 0 20 20'>
        <path d='M0 0 L10 10 L0 20' />
      </Icon>
      <Line className='Line' viewBox='0 0 40 2' preserveAspectRatio='none'>
        <path d='M0 1 L40 1' />
        <path d='M0 1 L40 1' className='focus' />
        <path d='M0 1 L40 1' className='invalid' />
        <path d='M0 1 L40 1' className='valid' />
      </Line>
    </Label>
    <Button type='submit' />
  </Form>
)
