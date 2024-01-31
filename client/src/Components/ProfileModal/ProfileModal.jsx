// ProfileModal.jsx

import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  const overlayColor =
    theme.colorScheme === "dark"
      ? theme.colors.dark[9]
      : theme.colors.gray[2];

  console.log("modalOpened in ProfileModal:", modalOpened);

  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      overlayProps={{
        backgroundOpacity: 0.55,
        
        color: overlayColor,
      }}
      title="Your Info"
      
    >
      <form className='infoForm'>
        <h3>Your Info!</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="Lives in"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Specializes in "
          />
        </div>
        <div>
          Profile Image 
          <input type="file" name='profileImg'/>
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
