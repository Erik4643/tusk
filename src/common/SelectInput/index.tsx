import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useAppDispatch } from 'hooks'
import { setLimit } from 'store/app'

interface ISelectInputProps {
    limit: string
}
export const SelectInput = ({ limit }: ISelectInputProps) => {
  const [selectedOption, setSelectedOption] = useState({ value: '10', label: '10' })
  const dispatch = useAppDispatch()

  // TODO: all data had to pass through the props, but time is short
  const options = [
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '25', label: '25' },
    { value: '40', label: '40' },
    { value: '60', label: '60' },
    { value: '80', label: '80' },
    { value: '100', label: '100' }
  ]

  const handleChange = (selected: any) => {
    setSelectedOption(selected)
    dispatch(setLimit(selected.value))
  }

  useEffect(() => {
    setSelectedOption(
      {
        value: limit,
        label: limit
      }
    )
  }, [limit])

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  )
}
