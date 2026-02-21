import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Package, DollarSign } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Textarea } from "../../components/ui/Textarea";

const steps = [
  { id: 1, title: "Locations" },
  { id: 2, title: "Details" },
  { id: 3, title: "Schedule" },
  { id: 4, title: "Pricing" },
];

export function JobCreation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupAddress: "",
    dropoffLocation: "",
    dropoffAddress: "",
    itemType: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    description: "",
    date: "",
    time: "",
    price: "",
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit job
      alert("Job posted successfully!");
      navigate("/business/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/business/dashboard");
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.pickupLocation &&
          formData.pickupAddress &&
          formData.dropoffLocation &&
          formData.dropoffAddress
        );
      case 2:
        return formData.itemType && formData.weight;
      case 3:
        return formData.date && formData.time;
      case 4:
        return formData.price;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-2xl text-gray-900 font-bold">Create Job</h1>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-2xl mx-auto">
        {/* Progress Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 font-bold ${
                      currentStep >= step.id
                        ? "bg-[#2563EB] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div
                    className={`text-xs text-center ${
                      currentStep >= step.id
                        ? "text-[#2563EB]"
                        : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 mb-8 ${
                      currentStep > step.id ? "bg-[#2563EB]" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Locations */}
        {currentStep === 1 && (
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-[#2563EB]" />
              <h2 className="text-xl text-gray-900 font-semibold">
                Pickup & Drop-off Locations
              </h2>
            </div>

            {/* Mock Map */}
            <div className="bg-gray-100 rounded-lg h-48 mb-6 flex items-center justify-center border border-gray-300">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <div className="text-sm">Map View</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg mb-4 text-gray-900 font-semibold flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2563EB]"></div>
                  Pickup Location
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="pickupLocation">Location Name</Label>
                    <Input
                      id="pickupLocation"
                      placeholder="e.g., Main Warehouse"
                      value={formData.pickupLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupLocation: e.target.value,
                        })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupAddress">Full Address</Label>
                    <Input
                      id="pickupAddress"
                      placeholder="1234 Industrial Blvd, Chicago, IL 60601"
                      value={formData.pickupAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          pickupAddress: e.target.value,
                        })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4 text-gray-900 font-semibold flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                  Drop-off Location
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="dropoffLocation">Location Name</Label>
                    <Input
                      id="dropoffLocation"
                      placeholder="e.g., Distribution Center"
                      value={formData.dropoffLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropoffLocation: e.target.value,
                        })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dropoffAddress">Full Address</Label>
                    <Input
                      id="dropoffAddress"
                      placeholder="5678 Commerce Dr, Milwaukee, WI 53202"
                      value={formData.dropoffAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dropoffAddress: e.target.value,
                        })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Step 2: Details */}
        {currentStep === 2 && (
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <Package className="w-5 h-5 text-[#2563EB]" />
              <h2 className="text-xl text-gray-900 font-semibold">
                Item Details
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="itemType">Item Type</Label>
                <Input
                  id="itemType"
                  placeholder="e.g., Palletized Goods, Electronics, Furniture"
                  value={formData.itemType}
                  onChange={(e) =>
                    setFormData({ ...formData, itemType: e.target.value })
                  }
                  className="bg-white border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="weight">Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="2400"
                  value={formData.weight}
                  onChange={(e) =>
                    setFormData({ ...formData, weight: e.target.value })
                  }
                  className="bg-white border-gray-300"
                />
              </div>

              <div>
                <Label>Dimensions (inches)</Label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <Input
                      placeholder="Length"
                      value={formData.length}
                      onChange={(e) =>
                        setFormData({ ...formData, length: e.target.value })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Width"
                      value={formData.width}
                      onChange={(e) =>
                        setFormData({ ...formData, width: e.target.value })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Height"
                      value={formData.height}
                      onChange={(e) =>
                        setFormData({ ...formData, height: e.target.value })
                      }
                      className="bg-white border-gray-300"
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">L × W × H</div>
              </div>

              <div>
                <Label htmlFor="description">
                  Additional Details (optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Special handling instructions, fragile items, etc."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="min-h-24 bg-white border-gray-300"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Step 3: Schedule */}
        {currentStep === 3 && (
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-[#2563EB]" />
              <h2 className="text-xl text-gray-900 font-semibold">
                Schedule Pickup
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="date">Pickup Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="bg-white border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="time">Pickup Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="bg-white border-gray-300"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-sm text-blue-900">
                  <strong>Note:</strong> Drivers will see this as the requested
                  pickup time. Actual pickup may vary by ±30 minutes based on
                  driver availability.
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Step 4: Pricing */}
        {currentStep === 4 && (
          <Card className="p-6 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-[#2563EB]" />
              <h2 className="text-xl text-gray-900 font-semibold">
                Set Your Price
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="price">Offer Amount ($)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="850"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="pl-10 bg-white border-gray-300 text-2xl"
                  />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-sm text-green-900">
                  <strong>Pricing Tip:</strong> Similar jobs in this area
                  average $750-$950. Competitive pricing helps attract quality
                  drivers faster.
                </div>
              </div>

              {/* Summary */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg mb-4 text-gray-900 font-semibold">
                  Job Summary
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route</span>
                    <span className="text-gray-900 text-right">
                      {formData.pickupLocation} → {formData.dropoffLocation}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Item</span>
                    <span className="text-gray-900">{formData.itemType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="text-gray-900">{formData.weight} lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule</span>
                    <span className="text-gray-900">
                      {formData.date &&
                        new Date(formData.date).toLocaleDateString()}{" "}
                      at {formData.time}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-semibold text-2xl text-[#10B981]">
                      ${formData.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          <Button onClick={handleBack} variant="outline" className="flex-1">
            {currentStep === 1 ? "Cancel" : "Back"}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8]"
          >
            {currentStep === 4 ? "Post Job" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
