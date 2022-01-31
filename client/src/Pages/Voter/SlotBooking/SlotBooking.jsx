import React from "react";
import "./SlotBooking.css";

const SlotBooking = () => {
  const slots = [{}];
  return (
    <>
      <main className="slotBookingPage">
        <h4 className="pageTitle mb-1">Slot Booking</h4>
        <p className="pageSubTitle">Choose among the following slots to avoid crowd</p>

        <div className="slots mt-3 mt-md-5 mx-md-5">
          <div className="slot">
            <i class="bx bx-check"></i>
            <div className="slotCount mb-4  h6">
              <i class="bx bxs-user me-2"></i> <span>30 left</span>
            </div>
            <h5>9:30 AM</h5>
            <p className="text-muted text-center my-3">to</p>
            <h5>10:00 AM</h5>
          </div>
          <div className="slot">
            <i class="bx bx-check"></i>
            <div className="slotCount mb-4  h6">
              <i class="bx bxs-user me-2"></i> <span>30 left</span>
            </div>
            <h5>9:30 AM</h5>
            <p className="text-muted text-center my-3">to</p>
            <h5>10:00 AM</h5>
          </div>
          <div className="slot">
            <i class="bx bx-check"></i>
            <div className="slotCount mb-4  h6">
              <i class="bx bxs-user me-2"></i> <span>30 left</span>
            </div>
            <h5>9:30 AM</h5>
            <p className="text-muted text-center my-3">to</p>
            <h5>10:00 AM</h5>
          </div>
          <div className="slot">
            <i class="bx bx-check"></i>
            <div className="slotCount mb-4  h6">
              <i class="bx bxs-user me-2"></i> <span>30 left</span>
            </div>
            <h5>9:30 AM</h5>
            <p className="text-muted text-center my-3">to</p>
            <h5>10:00 AM</h5>
          </div>
          <div className="slot">
            <i class="bx bx-check"></i>
            <div className="slotCount mb-4  h6">
              <i class="bx bxs-user me-2"></i> <span>30 left</span>
            </div>
            <h5>9:30 AM</h5>
            <p className="text-muted text-center my-3">to</p>
            <h5>10:00 AM</h5>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn bookSlotBtn">Book This Slot</button>
        </div>
      </main>
    </>
  );
};

export default SlotBooking;
