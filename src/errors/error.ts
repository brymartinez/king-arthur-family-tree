export class PersonNotFoundError extends Error {
  constructor() {
    super('PERSON_NOT_FOUND');
  }
}

export class ChildAdditionFailedError extends Error {
  constructor() {
    super('CHILD_ADDITION_FAILED');
  }
}
