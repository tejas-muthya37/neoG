import "./checkout.css";
import AddressForm from "./../AddressForm/AddressForm";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

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

  const [toastVisibility, setToastVisibility] = useState("hidden");
  const [toastText, setToastText] = useState("");
  const [toastColor, setToastColor] = useState({
    color: "",
    backgroundColor: "",
  });

  const emailPattern = /\S+@\S+\.\S+/;

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
    if (
      addressLine1.length === 0 ||
      addressLine2.length === 0 ||
      addressLine3.length === 0 ||
      addressLine4.length === 0 ||
      addressLine5.length === 0 ||
      addressLine6.length === 0 ||
      addressLine7.length === 0
    ) {
      setToastVisibility("visible");
      setToastText("All the fields are required!");
      setToastColor({
        color: "white",
        backgroundColor: "red",
      });
      setTimeout(() => setToastVisibility("hidden"), 2000);
    } else if (!emailPattern.test(addressLine3)) {
      setToastVisibility("visible");
      setToastText("Invalid Email Address!");
      setToastColor({
        color: "white",
        backgroundColor: "red",
      });
      setTimeout(() => setToastVisibility("hidden"), 2000);
    } else if (addressLine2.length !== 10) {
      setToastVisibility("visible");
      setToastText("Invalid 10 Digit Mobile Number!");
      setToastColor({
        color: "white",
        backgroundColor: "red",
      });
      setTimeout(() => setToastVisibility("hidden"), 2000);
    } else if (addressLine4.length !== 6) {
      setToastVisibility("visible");
      setToastText("Invalid Pincode!");
      setToastColor({
        color: "white",
        backgroundColor: "red",
      });
      setTimeout(() => setToastVisibility("hidden"), 2000);
    } else if (addressLine5.length < 10) {
      setToastVisibility("visible");
      setToastText("Insufficient Address Details!");
      setToastColor({
        color: "white",
        backgroundColor: "red",
      });
      setTimeout(() => setToastVisibility("hidden"), 2000);
    } else {
      if (editingAddress === false) {
        setSavedAddresses([
          {
            addressId: uuid(),
            addressContent: `${addressLine1}, ${addressLine2}, ${addressLine4}, ${addressLine5}, ${addressLine6}, ${addressLine7}`,
          },
          ...savedAddresses,
        ]);
      } else {
        setSavedAddresses(
          [
            {
              addressId: uuid(),
              addressContent: `${addressLine1}, ${addressLine2}, ${addressLine4}, ${addressLine5}, ${addressLine6}, ${addressLine7}`,
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
      setToastVisibility("visible");
      setToastText("Address Saved ✔");
      setToastColor({
        color: "white",
        backgroundColor: "green",
      });
      setTimeout(() => setToastVisibility("hidden"), 2000);
    }
  };

  const removeAddress = (id) => {
    setSavedAddresses((savedAddresses) =>
      savedAddresses.filter((address) => address.addressId !== id)
    );
    setToastVisibility("visible");
    setToastText("Address Removed ✔");
    setToastColor({
      color: "white",
      backgroundColor: "red",
    });
    setTimeout(() => setToastVisibility("hidden"), 2000);
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
      <p
        style={{
          visibility: toastVisibility,
          backgroundColor: toastColor.backgroundColor,
          color: toastColor.color,
        }}
        className="message-toast"
      >
        {toastText}
      </p>
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
        <div className="saved-addresses">
          <button className="btn-add-address" onClick={showForm}>
            <span>+</span>ADD A NEW ADDRESS
          </button>
          {savedAddresses?.length > 0 && (
            <h3 className="saved-address-title">Saved Addresses</h3>
          )}
          {savedAddresses?.map((singleAddress) => {
            return (
              <div className="saved-address" key={singleAddress.addressId}>
                <p>{singleAddress.addressContent}</p>
                <div className="saved-address-button-group">
                  <button onClick={() => editAddress(singleAddress.addressId)}>
                    Edit
                  </button>
                  <button
                    onClick={() => removeAddress(singleAddress.addressId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          {savedAddresses?.length > 0 && (
            <Link to="/success">
              <button className="btn-confirm-order">CONFIRM ORDER</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Checkout;
