import { Base64 } from "js-base64";
import { useState } from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  const [showEncode, setShowEncode] = useState(false);

 var CryptoJS = require("crypto-js");
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <>
            {console.log("mess", message)}
            {(message.sender.avatar === null) &&
              <span style={{ float: 'left' }}>               
                <div class="avatar-icon-wrapper avatar-initials avatar-icon-xl mr-4">
                  <div class="avatar-icon text-white">
                     {`${message?.sender?.username}`.match(/\b([A-Za-z])/g)?.join('')}
                  </div>
                </div>
              </span>
            }
             <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px', width: showEncode && '50%' }} onMouseEnter={() => setShowEncode(true)} onMouseLeave={()=> setShowEncode(false)} >
              {showEncode ?
                <>
                   <h3 style={{textAlign:'center', marginBottom:'5px'}}>Encrypted Text</h3>
                  <textarea rows={3} style={{ width: '100%', border: 'none' }} className="their-encrypted">
                    {CryptoJS.AES.encrypt(`${message.text}`, 'secret key 123').toString()}
                  </textarea>
                  </>
                :
                message.text
              }
            </div>
          </>
        )}
    </div>
  );
};

export default TheirMessage;
