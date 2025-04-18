import {getImagePath} from '../../../shared/utils/share';
import {mapCustomerDTO} from '../../customers/api/mapping';
import {mapExecutorDTO} from '../../executors/api/mapping';
import {Service} from '../../service/model/types';
import {ExecutorReport, Order, Review} from '../model/types';
import {OrderDTO, ReportDTO, ReviewDTO, ServiceDTO} from './dto';

/**
 * Переводим OrderDTO в нормальный Order
 */
export const mapOrderDTO = (data: OrderDTO): Order => {
    return {
        address: data.address ? data.address : '',
        city: data.city ? data.city : '',
        executor: data.executor?.profile ? mapExecutorDTO(data.executor) : null,
        customer: data.customer ? mapCustomerDTO(data.customer) : null,
        comment: data.comment || '',
        payment: data.paymentMethod,
        priority: data.priority,
        id: `${data.id}`,
        date: new Date(data.workDate).toLocaleDateString('ru'),
        status: data.status || data.orderStaus,
        service: data.service ? mapServiceDTO(data.service) : null,
        review: data.customerReview ? mapReviewDTO(data.customerReview) : null,
        report: data.reports[0] ? mapReportDTO(data.reports[0]) : null,
        septicVolume: `${data.septicVolume}`,
        septicDepth: `${data.septicDepth}`,
        septicDistance: `${data.distanceToSeptic}`,
        object: data.objectType,
    };
};

/*
 * Переводим ServiceDTO в нормальный Service
 */
export const mapServiceDTO = (service: ServiceDTO): Service => {
    return {
        id: service.id,
        name: service.name,
        priority: service.priority,
    };
};

/**
 * Переводим ReviewDTO в нормальный Review
 */
export const mapReviewDTO = (review: ReviewDTO): Review => {
    return {
        author: mapCustomerDTO(review.author),
        id: review.id,
        rating: review.rating,
        text: review.text,
    };
};

/**
 * Переводм ReportDTO в нормальный Report
 */
export const mapReportDTO = (report: ReportDTO): ExecutorReport => {
    return {
        id: report.id,
        total: report.total,
        files: report.files.map((el) => getImagePath(el.url)),
    };
};
