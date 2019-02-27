export default function titleInitials(title) {
  try {
    return title
      .split(' ')
      .map(word => word[0].toUpperCase())
      .slice(0, 2)
      .join('');
  } catch (error) {
    console.log(error);
    return 'JD';
  }
}
