import Nav from "../components/nav";
import RSVPButton from "../components/rsvpBtn";

export default function WeddingParty() {
  return (
    <div className="page-container">
      <Nav />
      <div className="content-wrapper wp">
        <div className="bp-list">
          <ul className="maids">
            <span className="wp-list-title">BRIDESMAIDS</span>
            <li className="bp-item">MARY CONNOR COX</li>
            <span className="wedding-role">Maid of Honor</span>
            <li className="bp-item">HALEY HUGHES</li>
            <span className="wedding-role">Matron of Honor</span>
            <li className="bp-item">TORI CARTER</li>
            <li className="bp-item">LOGAN COLE</li>
            <li className="bp-item">REID COX</li>
            <li className="bp-item">EMMA DONALDSON</li>
            <li className="bp-item">ROE FERS</li>
            <li className="bp-item">GIN JAGER</li>
            <li className="bp-item">MK KELLEY</li>
            <li className="bp-item">SHELBY LAMON</li>
            <li className="bp-item">ISABEL YARBOROUGH</li>
          </ul>
        </div>
        <div className="bp-list">
          <ul className="men">
            <span className="wp-list-title">GROOMSMEN</span>
            <li className="bp-item">SCOTT CRUMRINE</li>
            <span className="wedding-role">Best Man</span>
            <li className="bp-item">DAVID ANDERSON</li>
            <li className="bp-item">REID CARTER</li>
            <li className="bp-item">DENTON COKER</li>
            <li className="bp-item">DREW CRUMRINE</li>
            <li className="bp-item">CHASE ELLIOTT</li>
            <li className="bp-item">CALEB GILBERT</li>
            <li className="bp-item">JACK HUTCHESON</li>
            <li className="bp-item">AUSTIN MIMS</li>
            <li className="bp-item">BEN NORWOOD, IV</li>
            <li className="bp-item">CHANCE PRUITT</li>
            <li className="bp-item">TANNER WINGER</li>
          </ul>
        </div>
      </div>
      <RSVPButton />
    </div>
  );
}
