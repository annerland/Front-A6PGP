import React, { useEffect, useState } from 'react'
import Modal from 'Components/molecules/genericModal'
import Input from 'Components/atoms/input'
import Select from 'Components/atoms/select'
import Button from 'Components/atoms/button'
import { FormValidator, validator } from 'Util/validator'
import { useTranslation } from 'react-i18next'
import Loading from 'Components/atoms/loading'
import Modals from 'Util/modals'
import Api from 'Util/api'
import PropTypes from 'prop-types'
import moment from 'moment'

import { useSelector } from 'react-redux'
import { path } from 'ramda'

const AddVaccineEstablishment = (props) => {
  const [application, setApplication] = useState('')
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState({})
  const [unity, setUnity] = useState()
  const [vaccine, setVaccine] = useState()
  const modal = useSelector(({ modals }) => modals.generic)

  const fetchVaccines = async () => {
    const res = await Api.Vaccine.list()
    // eslint-disable-next-line prefer-const
    let array = res.vacinas.map(elm => {
      return { value: elm.id, label: elm.strNome }
    })

    setOptions(array)
  }

  const resetFields = () => {
    setVaccine('')
    setApplication('')
  }

  const formValidator = new FormValidator([
    {
      field: 'application',
      method: validator.isEmpty,
      validWhen: false,
      message: 'data de aplicação inválida'
    },
    {
      field: 'vaccine',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Vacina inválida'
    }
  ])

  useEffect(() => {
    setUnity(path(['body', 'unity', 'id'], modal))
    resetFields()
  }, [modal])

  const submit = async () => {
    const validation = formValidator.validate({ application, vaccine })
    setErrors(validation)

    if (validation.isValid) {
      const data = {}
      data.fkUnidade = unity
      data.fkVacina = vaccine.value.toString()
      data.dtAplicacao = application
      data.boolStatus = '1'
      data.boolAtivo = '1'
      moment(application).format('YYYY-MM-DD')
      console.log(application)

      try {
        await Api.Establishment.addVaccine(data)
        props.onChange()
        setLoading(true)
        resetFields()

        Modals.Generic.sucess({
          title: 'Adicionar vacina',
          text: 'Sua vacina foi adicionada com sucesso!',
          continue: 'OK',
          handleAction: () => Modals.Generic.hide()
        })
      } catch (err) {
        setLoading(false)
        console.log(err)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVaccines()
  }, [])

  return (
    <Modal id='add-vaccine-establishment' width={532}>
      <Loading show={loading} />
      <div className='modal-container'>
        <h2 className='title'>Adicionar vacina</h2>

        <Select
          label='Selecione a vacina'
          options={options}
          value={vaccine}
          onChange={setVaccine}
        />

        <Input
          label='Data da aplicação'
          onChange={setApplication}
          value={application}
          placeholder='Ex. 13/11/2020'
          validator={errors.application}
        />

        <Button onClick={() => submit()}>Enviar</Button>
      </div>
    </Modal>
  )
}

AddVaccineEstablishment.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.any
}

export default AddVaccineEstablishment
