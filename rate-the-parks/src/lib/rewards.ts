export function calculateXP({
  hasPhoto,
  hasNote,
  firstTime,
  streakCount,
}: {
  hasPhoto: boolean;
  hasNote: boolean;
  firstTime: boolean;
  streakCount: number;
}) {
  let xp = 10;

  if (hasPhoto) xp += 5;
  if (hasNote) xp += 3;
  if (firstTime) xp += 5;

  if (streakCount >= 3 && streakCount < 7) xp += 2;
  if (streakCount >= 7) xp += 5;

  return xp;
}
