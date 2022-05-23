import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'
import { ConsumptionCalculatorResultsContainer } from '../components/molecules'

interface INumbersProps {
  num1: number
  num2: number
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #f0f0f0;
  h4 {
    margin: 0;
    margin-top: 1em;
  }
`
const CCWrapper = styled.div``

const ConsumptionCalculator: React.FC<{}> = () => {
  const initialValues: INumbersProps = { num1: null, num2: null }
  const [squareMeter, setSquareMeter] = useState(0)

  const calculateSqareMeters = (numbers: any) => {
    const { num1, num2 } = numbers
    const sqareMeterResult = num1 * num2
    return sqareMeterResult
  }

  const handleSubmit = (values: any) => {
    const sqareMeterResult = calculateSqareMeters(values)
    setSquareMeter(sqareMeterResult)
  }

  return (
    <Wrapper>
      <CCWrapper>
        <h4>Forbrugsberegner</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values)
          }}
        >
          <Form>
            <p>Længde</p>
            <Field type="number" id="num1" name="num1" />
            <p>Bredde</p>
            <Field type="number" id="num2" name="num2" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <ConsumptionCalculatorResultsContainer squareMeter={squareMeter} />
      </CCWrapper>
    </Wrapper>
  )
}
export default ConsumptionCalculator
