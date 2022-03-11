import React from "react";

const Slot = ({ slot, setSelectedSlot, selectedSlot }) => {
  return (
    <>
      <div
        className={"slot " + (slot._id === selectedSlot ? "selectedSlot" : "")}
        onClick={() => {
          setSelectedSlot(slot._id);
        }}
      >
        <i class="bx bx-check"></i>
        <div className="slotCount mb-4  h6">
          <i class="bx bxs-user me-2"></i> <span>{slot.size - slot.bookedBy.length} left</span>
        </div>
        <h5>{slot.startTime}</h5>
        <p className="text-muted text-center my-3">to</p>
        <h5>{slot.endTime}</h5>
      </div>
    </>
  );
};

export default Slot;
