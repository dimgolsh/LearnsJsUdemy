import React from "react";
import { Button } from 'reactstrap';
import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button outline color='info'>Все</Button>
      <button type="submit" className="btn btn-info">
        Все
      </button>
      <button type="submit" className="btn btn-outline-secondary">
        понравилось
      </button>
    </div>
  );
};
export default PostStatusFilter;
