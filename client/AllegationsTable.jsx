import React, { useEffect } from 'react';
import { parseComplaintantInfo } from './utils';
import Tablesaw from 'tablesaw';

export const AllegationsTable = (props) => {
  const { allegations, total, handleQuery, curOffset } = props;
  const NUMRESULTS = 30;

  const isDisabled = (isNext) => {
    if (isNext) {
      return NUMRESULTS + curOffset > total;
    }
    return curOffset - NUMRESULTS < 0;
  };

  useEffect(() => {
    Tablesaw.init();
  });
  return (
    <>
      {Math.floor(curOffset / NUMRESULTS) + 1} of{' '}
      {Math.ceil(total / NUMRESULTS)}
      <button
        disabled={isDisabled(false)}
        onClick={() => handleQuery(-NUMRESULTS)}
      >
        Prev Page
      </button>
      <button
        disabled={isDisabled(true)}
        onClick={() => handleQuery(NUMRESULTS)}
      >
        Next Page
      </button>
      <table className="tablesaw table-hover" data-tablesaw-mode="stack">
        <thead>
          <tr>
            <th scope="col">Officer</th>
            <th scope="col" data-tablesaw-priority="4">
              Officer Rank
            </th>
            <th scope="col" data-tablesaw-priority="4">
              Officer Details
            </th>
            <th scope="col">Complainant Details</th>

            <th scope="col">Board Outcome</th>
          </tr>
        </thead>
        <tbody>
          {allegations.map((a) => {
            return (
              <tr key={a.id}>
                <td>
                  <b className="tablesaw-cell-label">Officer</b>
                  {a.first_name} {a.last_name}
                </td>
                <td>
                  <b className="tablesaw-cell-label">Officer Rank </b>
                  {a.rank_incident}
                </td>
                <td>
                  <b className="tablesaw-cell-label">Officer Details</b>
                  {parseComplaintantInfo(a, false)}
                </td>
                <td>
                  <b className="tablesaw-cell-label">Complainant Details</b>
                  {parseComplaintantInfo(a)}
                </td>
                <td>
                  <b className="tablesaw-cell-label">Board Outcome</b>
                  {a.board_disposition}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        disabled={isDisabled(false)}
        onClick={() => handleQuery(-NUMRESULTS)}
      >
        Prev Page
      </button>
      <button
        disabled={isDisabled(true)}
        onClick={() => handleQuery(NUMRESULTS)}
      >
        Next Page
      </button>
    </>
  );
};