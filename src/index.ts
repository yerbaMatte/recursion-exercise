// interviews

/*
=========================== QUESTION 1: ===========================

We're putting together a seating chart for our class, but there are some students we don't want sitting together. We want to know if a given chart and disallowed pairs of students is a valid seating arrangement.

For example, consider the following data:

seating_1 = [['Imani', 'Anika', 'Alice', 'Hessa'],
             ['Rasha', 'Josue', 'Clair', 'Simon'],
             ['Kylee', 'Sevis', 'Layla', 'Razan'],
             ['Kaveh', 'Siafa', 'Leong', 'Nimat'],
             ['Erica', 'Hilda', 'Harsi', 'Juana'],
             ['Lotus', 'Venla', 'Bemra', 'Nader']]
disallowed_pairs_1_1 = [["Razan", "Siafa"], ["Erica", "Lotus"]]
disallowed_pairs_1_2 = [["Rasha", "Anika"], ["Alice", "Simon"]]

Students are considered to be sitting together if they are immediately next to each other up, down, left or right. In the disallowed_pairs_1_1 example, Razan and Siafa are not sitting next to each other, but Erica and Lotus are. So, this seating would be invalid with this list of disallowed student pairs, and we would return False.

However, for disallowed_pairs_1_2, both the Rasha/Anika and Alice/Simon pairs are not sitting next to each other (diagonally does not count). So we would return True.

Write a function that takes in a seating arrangement and pairs of disallowed students, as described above, and returns if the arrangement is valid or not.

All Test Cases:
acceptable_seating(seating_1, disallowed_pairs_1_1)  => False
acceptable_seating(seating_1, disallowed_pairs_1_2)  => True
acceptable_seating(seating_1, disallowed_pairs_1_3)  => False
acceptable_seating(seating_1, disallowed_pairs_1_4)  => False
acceptable_seating(seating_1, disallowed_pairs_1_5)  => False
acceptable_seating(seating_2, disallowed_pairs_2_1)  => False
acceptable_seating(seating_2, disallowed_pairs_2_2)  => True
acceptable_seating(seating_2, disallowed_pairs_2_3)  => False
acceptable_seating(seating_2, disallowed_pairs_2_4)  => True
acceptable_seating(seating_3, disallowed_pairs_3_1)  => True
acceptable_seating(seating_3, disallowed_pairs_3_2)  => False
acceptable_seating(seating_3, disallowed_pairs_3_3)  => True

Complexity Variables:
r: The number of rows in the seating.
c: The number of columns in the seating.
n: The number of disallowed pairs.
*/
'use strict';

// ===========================  QUESTION 1 ===========================
const seating_1 = [
  ['Imani', 'Anika', 'Alice', 'Hessa'],
  ['Rasha', 'Josue', 'Clair', 'Simon'],
  ['Kylee', 'Sevis', 'Layla', 'Razan'],
  ['Kaveh', 'Siafa', 'Leong', 'Nimat'],
  ['Erica', 'Hilda', 'Harsi', 'Juana'],
  ['Lotus', 'Venla', 'Bemra', 'Nader'],
];
const disallowed_pairs_1_1 = [
  ['Razan', 'Siafa'],
  ['Erica', 'Lotus'],
];
const disallowed_pairs_1_2 = [
  ['Rasha', 'Anika'],
  ['Alice', 'Simon'],
];
const disallowed_pairs_1_3 = [
  ['Alice', 'Hessa'],
  ['Kylee', 'Layla'],
];
const disallowed_pairs_1_4 = [
  ['Bemra', 'Nader'],
  ['Josue', 'Hilda'],
];
const disallowed_pairs_1_5 = [
  ['Razan', 'Siafa'],
  ['Imani', 'Rasha'],
];
const seating_2 = [
  ['Tamiko', 'Boimah', 'Anjana', 'Elijah', 'Raatib', 'Darcie'],
  ['Trokon', 'Hugues', 'Dariya', 'Tambre', 'Cedric', 'Matias'],
  ['Mariah', 'Marian', 'Ulrico', 'Gerard', 'Sarama', 'Tayiko'],
  ['Ashraf', 'Jazlyn', 'Majeed', 'Borzoo', 'Najmeh', 'Animan'],
];
const disallowed_pairs_2_1 = [
  ['Anjana', 'Elijah'],
  ['Tambre', 'Sarama'],
  ['Animan', 'Raatib'],
  ['Sarama', 'Elijah'],
  ['Tayiko', 'Dariya'],
];
const disallowed_pairs_2_2 = [
  ['Animan', 'Mariah'],
  ['Cedric', 'Mariah'],
  ['Marian', 'Sarama'],
];
const disallowed_pairs_2_3 = [
  ['Tambre', 'Anjana'],
  ['Elijah', 'Borzoo'],
  ['Sarama', 'Tayiko'],
  ['Jazlyn', 'Hugues'],
  ['Marian', 'Matias'],
];
const disallowed_pairs_2_4 = [
  ['Majeed', 'Gerard'],
  ['Matias', 'Marian'],
];
const seating_3 = [
  ['Heydar', 'Lamie', 'Ibhi', 'Kit', 'Alas', 'Yasaman', 'Xochitl'],
  ['Tala', 'Isabelle', 'Genoveffa', 'Sakuro', 'Abay', 'Lee', 'Topper'],
  ['Korekiyo', 'Ancelmes', 'Sherin', 'Frasier', 'Paisley', 'Hayley', 'Leon'],
];
const disallowed_pairs_3_1 = [
  ['Hayley', 'Alas'],
  ['Hayley', 'Abay'],
  ['Abay', 'Korekiyo'],
  ['Xochitl', 'Paisley'],
  ['Sherin', 'Lamie'],
];
const disallowed_pairs_3_2 = [
  ['Hayley', 'Leon'],
  ['Kit', 'Alas'],
  ['Lee', 'Korekiyo'],
  ['Leon', 'Tala'],
  ['Yasaman', 'Frasier'],
];
const disallowed_pairs_3_3 = [
  ['Isabelle', 'Korekiyo'],
  ['Ancelmes', 'Sakuro'],
  ['Yasaman', 'Ibhi'],
  ['Abay', 'Korekiyo'],
];

// const seating_3 = [
//   ['Heydar', 'Lamie', 'Ibhi', 'Kit', 'Alas', 'Yasaman', 'Xochitl'],
//   ['Tala', 'Isabelle', 'Genoveffa', 'Sakuro', 'Abay', 'Lee', 'Topper'],
//   ['Korekiyo', 'Ancelmes', 'Sherin', 'Frasier', 'Paisley', 'Hayley', 'Leon'],
// ];

function acceptable_seating(seatings: string[][], dissalowed: string[][]) {
  // find the first person
}
