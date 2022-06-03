import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  where,
  query,
  updateDoc,
} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getallProperty(): Observable<any> {
    const propertyRef = collection(this.firestore, 'property');
    return collectionData(propertyRef, { idField: 'propertyId' });
  }

  getPropertybyId(id): Observable<any> {
    const propertyRefbyId = doc(this.firestore, `property/${id}`);
    return docData(propertyRefbyId, { idField: 'propertyId' });
  }
  getallPropertyavailable(): Observable<any> {
    const propertyavailableRef = collection(this.firestore, 'property');
    const queryslot = query(propertyavailableRef, where('slots', '>', 0));
    return collectionData(queryslot, { idField: 'propertyId' });
  }
  getPropertybycity(cityId): Observable<any> {
    const propertyRef = collection(this.firestore, 'property');
    const querycityid = query(propertyRef, where('cityId', '==', cityId));
    return collectionData(querycityid, { idField: 'propertyId' });
  }
  getPropertybygender(gender): Observable<any> {
    const propertyRef = collection(this.firestore, 'property');
    const querygender = query(propertyRef, where('forGender', '==', gender));
    return collectionData(querygender, { idField: 'propertyId' });
  }
  getPropertybypricerange(min, max): Observable<any> {
    const propertyRef = collection(this.firestore, 'property');
    const queryrange = query(
      propertyRef,
      where('property_rent_monthly', '>=', min),
      where('property_rent_monthly', '<=', max)
    );
    return collectionData(queryrange, { idField: 'propertyId' });
  }
  getPropertybycitygender(city, gender): Observable<any> {
    const propertyRef = collection(this.firestore, 'property');
    const queryall = query(
      propertyRef,
      where('cityId', '==', city),
      where('forGender', '==', gender)
    );
    return collectionData(queryall, { idField: 'propertyId' });
  }
  getAgentDetails(agentId): Observable<any> {
    const propertyRefbyId = doc(this.firestore, `agents/${agentId}`);
    return docData(propertyRefbyId, { idField: 'agentId' });
  }
  getBookingDetails(bookingId): Observable<any> {
    const bookingRefbyId = doc(this.firestore, `booking/${bookingId}`);
    return docData(bookingRefbyId, { idField: 'bookingId' });
  }
  getScheduleVisitDetails(scheduleVisitId): Observable<any> {
    const ScheduleVisitRefbyId = doc(
      this.firestore,
      `scheduleVisit/${scheduleVisitId}`
    );
    return docData(ScheduleVisitRefbyId, { idField: 'scheduleVisitId' });
  }
  addProperty(propertyDetails) {
    const propertyReff = collection(this.firestore, 'property');
    return addDoc(propertyReff, propertyDetails);
  }
  addAgents(agentDetails) {
    const agentReff = collection(this.firestore, 'agents');
    return addDoc(agentReff, agentDetails);
  }
  addBooking(BookingDetails) {
    const bookingReff = collection(this.firestore, 'booking');
    return addDoc(bookingReff, BookingDetails);
  }
  addScheduleVisit(ScheduleVisitDetails) {
    const ScheduleVisitReff = collection(this.firestore, 'scheduleVisit');
    return addDoc(ScheduleVisitReff, ScheduleVisitDetails);
  }
  updateProperty(propertyId, updatedDetails) {
    const propertyRefbyId = doc(this.firestore, `property/${propertyId}`);
    return updateDoc(propertyRefbyId, updatedDetails);
  }
}
