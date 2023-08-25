function generateRealEstateCompanyName() {
  const prefixes = [
    'Prestige',
    'Elite',
    'Prime',
    'Metro',
    'Urban',
    'Horizon',
    'Landmark',
    'Legacy',
    'Crest',
    'Noble',
  ];
  const cores = [
    'Realty',
    'Properties',
    'Estates',
    'Holdings',
    'Ventures',
    'Developers',
    'Homestead',
    'Habitats',
    'Domain',
    'Territory',
  ];
  const suffixes = [
    'Group',
    'Associates',
    'LLC',
    'Corporation',
    'Inc.',
    'Partners',
    'Co.',
  ];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const core = cores[Math.floor(Math.random() * cores.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  const companyName = `${prefix} ${core} ${suffix}`;

  return companyName;
}

function generateUserName() {
  const firstNames = [
    'John',
    'Jane',
    'Robert',
    'Emily',
    'William',
    'Sarah',
    'James',
    'Linda',
    'Michael',
    'Jessica',
  ];
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function timeAgo(date) {
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast <= 86400) {
    return `${Math.round(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast <= 604800) {
    return `${Math.round(secondsPast / 86400)} days ago`;
  }
  return `${Math.round(secondsPast / 604800)} weeks ago`;
}

function generateFakeTasks(count = 10) {
  const fakeTasks = [];

  const statuses = ['New', 'Overdue'];

  function generateTaskTitle() {
    const taskType =
      Math.random() > 0.5 ? 'Review' : 'Submit additional information for';
    const numOfProperties = Math.floor(Math.random() * 10) + 1; // 1 to 10 properties
    const companyName = generateRealEstateCompanyName();
    return `${taskType} ${numOfProperties} properties in ${companyName} SOV`;
  }

  for (let i = 0; i < count; i++) {
    const createdDate = randomDate(
      new Date(new Date().getTime() - 60 * 24 * 60 * 60 * 1000),
      new Date()
    );
    const lastUpdatedDate = randomDate(createdDate, new Date());
    fakeTasks.push({
      id: i + 1,
      title: generateTaskTitle(),
      description: `Description of task ${i + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      assignedTo: generateUserName(),
      created: timeAgo(createdDate),
      lastUpdated: timeAgo(lastUpdatedDate),
    });
  }

  return fakeTasks;
}

const tasks = generateFakeTasks();
exports.tasks = tasks;

function generateFakeClients(count = 10) {
  const fakeClients = [];

  for (let i = 0; i < count; i++) {
    fakeClients.push({
      clientId: `CID-${i + 1001}`,
      name: generateRealEstateCompanyName(),
    });
  }

  return fakeClients;
}

const clients = generateFakeClients();
exports.clients = tasks;
