function KnightsTourInfo() {
  return (
    <div style={{ padding: '0 0.5rem' }}>
      <h2>What is a knight's tour?</h2>
      <p>A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once. If the knight ends on a square that is one knight's move from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed (or re-entrant); otherwise, it is open.</p>
      <small>Source: <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Knight%27s_tour">Wikipedia</a></small>
    </div>
  )
}

export default KnightsTourInfo;