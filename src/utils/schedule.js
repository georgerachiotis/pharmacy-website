export const dayNames = ['Κυρ', 'Δευ', 'Τρ', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'];
export const fullDayNames = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];

export const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export const formatScheduleSlots = (slots = []) => {
  if (slots.length === 0) {
    return 'Κλειστά';
  }

  return slots.map(([start, end]) => `${start} - ${end}`).join(' / ');
};

export const getBranchStatus = (branch, now = new Date()) => {
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const todaysSlots = branch.schedule[day] || [];

  for (const [start, end] of todaysSlots) {
    if (currentMinutes >= timeToMinutes(start) && currentMinutes < timeToMinutes(end)) {
      return {
        isOpen: true,
        label: 'Ανοιχτά τώρα',
        detail: `Κλείνει στις ${end}`,
      };
    }
  }

  const nextToday = todaysSlots.find(([start]) => currentMinutes < timeToMinutes(start));
  if (nextToday) {
    return {
      isOpen: false,
      label: 'Κλειστά τώρα',
      detail: `Ανοίγει στις ${nextToday[0]}`,
    };
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = (day + offset) % 7;
    const nextSlots = branch.schedule[nextDay] || [];
    if (nextSlots.length > 0) {
      return {
        isOpen: false,
        label: 'Κλειστά τώρα',
        detail: `Ανοίγει ${dayNames[nextDay]} ${nextSlots[0][0]}`,
      };
    }
  }

  return {
    isOpen: false,
    label: 'Κλειστά τώρα',
    detail: 'Καλέστε για διαθεσιμότητα',
  };
};
