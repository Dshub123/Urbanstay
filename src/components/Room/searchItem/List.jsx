import "./list.css";
import { useState } from "react";
import { DatePicker, Space } from "antd";
import SearchItem from "./SearchItem";

const {RangePicker}=DatePicker;
const List = () => {

    // const [openDate, setOpenDate] = useState(false);
    return (
        <div>

            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={""} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={""}></span>
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per Month</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per Month</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                         
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
