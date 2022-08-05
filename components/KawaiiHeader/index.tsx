import React, { useEffect, useState } from 'react'
import { Confirm } from 'semantic-ui-react'

import PuesVivo from './AnimatedHeader'
import PuesMuero from './RottenHeader'
import ModalHeaderContent from './ModalHeaderContent'

const KawaiiHeader = () => {
  const [visible, setVisible] = useState(true)
  const [meMori, setMeMori] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [count, setCount] = useState(0)

  const closeModal = () => setModalOpen(false)
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible)

  useEffect(() => {
    window.setTimeout(toggleVisible, 350)
  }, [])

  useEffect(() => {
    if (count == 4) {
      setMeMori(true)
      setModalOpen(true)
    }
  }, [count])

  return (
    <div className="container">
      {meMori ? (
        <PuesMuero />
      ) : (
        <PuesVivo
          visible={visible}
          onClick={toggleVisible}
          onComplete={() => setCount((prevCount) => prevCount + 1)}
        />
      )}
      <Confirm
        open={modalOpen}
        content={ModalHeaderContent}
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton="Not, I'm sorry"
        confirmButton="Ok"
        closeOnDimmerClick={false}
      />

      <style>
        {`
        .container {
          margin: 2rem 0 3rem
        }
        .container :globa(.header) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        `}
      </style>
    </div>
  )
}

export default KawaiiHeader
