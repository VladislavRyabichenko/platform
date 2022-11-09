import React from 'react'

import { Modal } from 'components/common'

import AddTraderManually from './AddTraderManually'
import AddTraderThirdParty from './AddTraderThirdParty'

import { IModalShow } from './d.type'

const ModalGroup = ({ isModalShow, onClose }: {
  isModalShow: IModalShow
  onClose(key: keyof IModalShow, value: boolean): void
}) => {
  return (
    <>
      {/* Modal Add Trader Manually */}
      <Modal
        isShow={isModalShow['trader-manually']}
        className={{
          rootContainer: 'overflow-y-scroll',
          modalContainer: 'pt-7 max-w-[564px]'
        }}
        onClose={() => onClose('trader-manually', false)}
      >
        <AddTraderManually />
      </Modal>

      {/* Modal Add Trader Third Party */}
      <Modal
        isShow={isModalShow['trader-thidry-party']}
        className={{
          rootContainer: 'py-[258px] overflow-y-scroll',
          modalContainer: 'pt-7 max-w-[564px]'
        }}
        onClose={() => onClose('trader-thidry-party', false)}
      >
        <AddTraderThirdParty />
      </Modal>
    </>
  )
}

export default ModalGroup
