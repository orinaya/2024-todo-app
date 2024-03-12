import { Button, Input, Select, SelectItem, Switch, Textarea } from '@nextui-org/react'
import { useState } from 'react'

function TodoForm ({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'TODO',
    important: true
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4'
    >
      <Input
        name='title'
        type='text'
        label='Nom de la tâche'
        labelPlacement='inside'
        variant='flat'
        value={formData.title}
        onChange={handleChange}
        placeholder='Entrez le nom de la tâche'
      />
      <Textarea
        name='description'
        type='text'
        label='Description'
        labelPlacement='inside'
        variant='flat'
        value={formData.description}
        onChange={handleChange}
        disableAutosize
        placeholder='Entrez la description de la tâche'
      />
      <Select
        label='Statut'
        name='status'
        variant='flat'
        value={formData.status}
        onChange={handleChange}
        defaultSelectedKeys={[formData.status]}
        placeholder='Choisir un statut'
      >
        <SelectItem key='TODO' value='TODO' textValue='À faire'>À faire</SelectItem>
        <SelectItem key='IN-PROGRESS' value='IN-PROGRESS' textValue='En cours'>En cours</SelectItem>
        <SelectItem key='DONE' value='DONE' textValue='Fait'>Fait</SelectItem>
        <SelectItem key='CANCELED' value='CANCELED' textValue='Annulé'>Annulé</SelectItem>
        <SelectItem key='ARCHIVED' value='ARCHIVED' textValue='Archivé'>Archivé</SelectItem>
      </Select>
      <Switch
        value={formData.important}
        label='Important'
        isSelected={formData.important}
        onValueChange={(isChecked) => {
          setFormData({ ...formData, important: isChecked })
        }}
      >
        Important
      </Switch>

      <Button type='submit'>
        Envoyer
      </Button>
    </form>

  )
}

export default TodoForm
