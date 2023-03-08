import React from "react";
import "./modal.css";
function Modal(props) {
  const handleClose = () => {
    props.closeModal();
  };
  const uniqId = props.data.title.split("#")[1];
  return (
    <div className="modal">
      <img
        src={props.data.coverUrl}
        alt=""
        className="nft-image"
      />
      <h2 className="nft-title">{props.data.title}</h2>
      <table className="nft-details">
        <tr>
          <th>Contract Address</th>
          <th>Network</th>
          <th>Token ID</th>
          <th>Chain</th>
        </tr>
        <tr>
          <td>0x8a90CAb...38B8992e</td>
          <td>Ethereum</td>
          <td>2287</td>
          <td>Ethereum</td>
        </tr>
      </table>
      <p className="description">
        A community-driven collectibles project featuring art by Burnt Toast.
        Doodles come in a joyful range of colors, traits and sizes with a
        collection size of 10,000. Each Doodle allows its owner to vote for
        experiences and activations paid for by the Doodles Community Treasury.
        Burnt Toast is the working alias for Scott Martin, a Canadian–based
        illustrator, designer, animator and muralist.
      </p>

      <div className="options">
        <button className="btn" onClick={handleClose}>
          Close
        </button>
        <a
          href={`https://opensea.io/assets/ethereum/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/${uniqId}`}
          className="btn link"
          target="_blank"
          rel="noreferrer"
        >
          Buy Now
          <img
            src="https://opensea.io/static/images/logos/opensea.svg"
            style={{ width: "30px", height: "14px" }}
            alt="opensea"
          />
        </a>
      </div>
    </div>
  );
}

export default Modal;
