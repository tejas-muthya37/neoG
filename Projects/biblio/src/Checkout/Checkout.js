import "./checkout.css";
import AddressForm from "./../AddressForm/AddressForm";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function Checkout() {
  var storedSavedAddresses = JSON.parse(
    localStorage.getItem("SAVED_ADDRESSES")
  );

  if (storedSavedAddresses === undefined) storedSavedAddresses = [];

  var [addressLine1, setAddressLine1] = useState("");
  var [addressLine2, setAddressLine2] = useState("");
  var [addressLine3, setAddressLine3] = useState("");
  var [addressLine4, setAddressLine4] = useState("");
  var [addressLine5, setAddressLine5] = useState("");
  var [addressLine6, setAddressLine6] = useState("");
  var [addressLine7, setAddressLine7] = useState("");

  const [savedAddresses, setSavedAddresses] = useState(storedSavedAddresses);
  const [formDisplay, setFormDisplay] = useState(false);
  const [editingAddress, setEditingAddress] = useState(false);

  const [editedAddressId, setEditedAddressId] = useState("");

  const editAddress = (id) => {
    setEditingAddress(true);
    setFormDisplay(true);
    setEditedAddressId(id);
    savedAddresses.map((address) => {
      if (address.addressId === id) {
        const tempAddressArray = address.addressContent.split(", ");
        setAddressLine1(tempAddressArray[0]);
        setAddressLine2(tempAddressArray[1]);
        setAddressLine3(tempAddressArray[2]);
        setAddressLine4(tempAddressArray[3]);
        setAddressLine5(tempAddressArray[4]);
        setAddressLine6(tempAddressArray[5]);
        setAddressLine7(tempAddressArray[6]);
      }
      return true;
    });
  };

  const removeAddress = (id) => {
    setSavedAddresses((savedAddresses) =>
      savedAddresses.filter((address) => address.addressId !== id)
    );
  };

  const showForm = () => setFormDisplay(true);

  const updateAddressLine1 = (event) => {
    const tobeUpdated1 = event.target.value;
    setAddressLine1(tobeUpdated1);
  };

  const updateAddressLine2 = (event) => {
    const tobeUpdated2 = event.target.value;
    setAddressLine2(tobeUpdated2);
  };

  const updateAddressLine3 = (event) => {
    const tobeUpdated3 = event.target.value;
    setAddressLine3(tobeUpdated3);
  };

  const updateAddressLine4 = (event) => {
    const tobeUpdated4 = event.target.value;
    setAddressLine4(tobeUpdated4);
  };

  const updateAddressLine5 = (event) => {
    const tobeUpdated5 = event.target.value;
    setAddressLine5(tobeUpdated5);
  };

  const updateAddressLine6 = (event) => {
    const tobeUpdated6 = event.target.value;
    setAddressLine6(tobeUpdated6);
  };

  const updateAddressLine7 = (event) => {
    const tobeUpdated7 = event.target.value;
    setAddressLine7(tobeUpdated7);
  };

  const updateSavedAddresses = () => {
    if (editingAddress === false) {
      setSavedAddresses([
        {
          addressId: uuid(),
          addressContent: `${addressLine1}, ${addressLine2}, ${addressLine3}, ${addressLine4}, ${addressLine5}, ${addressLine6}`,
        },
        ...savedAddresses,
      ]);
    } else {
      setSavedAddresses(
        [
          {
            addressId: uuid(),
            addressContent: `${addressLine1}, ${addressLine2}, ${addressLine3}`,
          },
          ...savedAddresses,
        ].filter((address) => address.addressId !== editedAddressId)
      );
    }
    setAddressLine1("");
    setAddressLine2("");
    setAddressLine3("");
    setAddressLine4("");
    setAddressLine5("");
    setAddressLine6("");
    setAddressLine7("");
    setFormDisplay(false);
    localStorage.setItem("SAVED_ADDRESSES", JSON.stringify(savedAddresses));
  };

  const cancelUpdateSavedAddresses = () => {
    setAddressLine1("");
    setAddressLine2("");
    setAddressLine3("");
    setAddressLine4("");
    setAddressLine5("");
    setAddressLine6("");
    setAddressLine7("");
    setFormDisplay(false);
  };

  useEffect(() => {
    localStorage.setItem("SAVED_ADDRESSES", JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  return (
    <div className="Checkout">
      {formDisplay && (
        <AddressForm
          updateAddressLine1={updateAddressLine1}
          updateAddressLine2={updateAddressLine2}
          updateAddressLine3={updateAddressLine3}
          updateAddressLine4={updateAddressLine4}
          updateAddressLine5={updateAddressLine5}
          updateAddressLine6={updateAddressLine6}
          updateAddressLine7={updateAddressLine7}
          updateSavedAddresses={updateSavedAddresses}
          cancelUpdateSavedAddresses={cancelUpdateSavedAddresses}
          input1Value={addressLine1}
          input2Value={addressLine2}
          input3Value={addressLine3}
          input4Value={addressLine4}
          input5Value={addressLine5}
          input6Value={addressLine6}
          input7Value={addressLine7}
        />
      )}
      {formDisplay === false && (
        <div>
          <button onClick={showForm}>Add New</button>
          {savedAddresses?.length > 0 && <h3>Saved Addresses</h3>}
          {savedAddresses?.map((singleAddress) => {
            return (
              <div key={singleAddress.addressId}>
                <p>{singleAddress.addressContent}</p>
                <button onClick={() => editAddress(singleAddress.addressId)}>
                  Edit
                </button>
                <button onClick={() => removeAddress(singleAddress.addressId)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;
